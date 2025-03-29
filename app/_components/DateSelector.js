"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useEffect, useState } from "react";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  if (!range.from || !range.to) return false;
  return datesArr.some((date) =>
    isWithinInterval(date, { start: range.from, end: range.to })
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates)
    ? { from: null, to: null }
    : range;

  const { regularPrice, discount } = cabin;
  const numNights =
    displayRange.from && displayRange.to
      ? differenceInDays(displayRange.to, displayRange.from)
      : 0;
  const cabinPrice = numNights > 0 ? numNights * (regularPrice - discount) : 0;

  const { minBookingLength, maxBookingLength } = settings;

  const [numMonths, setNumMonths] = useState(1);

  useEffect(() => {
    function updateMonths() {
      setNumMonths(window.innerWidth >= 768 ? 2 : 1);
    }

    updateMonths();
    window.addEventListener("resize", updateMonths);
    return () => window.removeEventListener("resize", updateMonths);
  }, []);

  return (
    <div className="flex flex-col justify-between space-y-6">
      <DayPicker
        className="pt-6 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={numMonths}
        disabled={(curDate) => {
          const isBooked = bookedDates.some((date) => isSameDay(date, curDate));
          return isPast(curDate) || isBooked;
        }}
      />

      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-accent-500 text-primary-800 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl sm:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700 text-sm sm:text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl sm:text-2xl">${regularPrice}</span>
            )}
            <span className="text-sm">/night</span>
          </p>

          {numNights ? (
            <div className="flex gap-4">
              <p className="bg-accent-600 px-3 py-1 text-lg sm:text-xl rounded-md">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-sm sm:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-xl sm:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </div>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-3 text-xs sm:text-sm font-semibold mt-4 sm:mt-0"
            onClick={() => {
              resetRange();
              setRange({ from: null, to: null });
            }}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
