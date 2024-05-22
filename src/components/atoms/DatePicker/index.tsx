import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { type DateRange, type DayPickerProps } from "react-day-picker";

type BaseDatePickerProps = {
  triggerButtonClassName?: string;
  placeholder?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  disabledDays?: Date[];
} & DayPickerProps;

type DatePickerSingleOrDefaultProps = BaseDatePickerProps & {
  mode: "single" | "multiple";
};

type DatePickerRangeProps = BaseDatePickerProps & {
  mode: "range";
  dayRangeFrom?: Date;
  dayRangeTo?: Date;
};

export const DatePicker = React.forwardRef<
  HTMLButtonElement,
  | Omit<DatePickerRangeProps, "disabled">
  | Omit<DatePickerSingleOrDefaultProps, "disabled">
>(
  (
    {
      triggerButtonClassName,
      placeholder,
      prefixIcon,
      mode = "single",
      selected,
      onSelect,
      disabledDays,
      ...props
    },
    ref
  ) => {
    const [date, setDate] = React.useState<Date | undefined>(selected as Date);
    const [multipleDates, setMultipleDates] = React.useState<Date[]>(
      (selected as Date[]) ?? []
    );
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
      (selected as DateRange) ?? {
        from: (props as DatePickerRangeProps).dayRangeFrom,
        to: (props as DatePickerRangeProps).dayRangeTo,
      }
    );
    const [placeholderText, setPlaceholderText] =
      React.useState<React.ReactNode>(placeholder);

    React.useEffect(() => {
      let datePickerText: React.ReactNode;
      switch (mode) {
        case "range":
          if (dateRange && dateRange.from && dateRange.to) {
            datePickerText = `${format(dateRange.from, "PPP")} - ${format(
              dateRange.to,
              "PPP"
            )}`;
            setPlaceholderText(datePickerText);
            return;
          }
          datePickerText = "Pick a date range";
          setPlaceholderText(placeholder ?? datePickerText);
          break;
        case "single":
          if (date) {
            datePickerText = format(date, "PPP");
            setPlaceholderText(datePickerText);
            return;
          }
          datePickerText = "Pick a date";
          setPlaceholderText(placeholder ?? datePickerText);
          break;
        case "multiple":
          if (multipleDates.length) {
            datePickerText = `${format(multipleDates[0], "PPP")} - ${format(
              multipleDates[multipleDates.length - 1],
              "PPP"
            )}`;
            datePickerText = `${multipleDates.map(date => format(date, "P")).join(", ")}`;
            setPlaceholderText(datePickerText);
            return;
          }
          datePickerText = "Pick multiple dates";
          setPlaceholderText(placeholder ?? datePickerText);
          break;
      }
    }, [mode, date, dateRange, multipleDates]);

    return (
      <Popover>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            className={cn(
              "flex w-full max-w-[305px] items-center justify-start rounded-md border px-4 py-2 text-left font-normal transition-colors duration-200 ease-in-out hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus-visible:ring-black",
              (!date || !dateRange || !multipleDates.length) &&
                "text-muted-foreground",
              triggerButtonClassName
            )}
            aria-label='date-picker'
          >
            {prefixIcon ? (
              <span className='mr-2 shrink-0'>{prefixIcon}</span>
            ) : (
              <CalendarIcon className='mr-2 h-4 w-4 shrink-0' />
            )}
            <span className='break-before-all'>{placeholderText}</span>
          </button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          {mode === "range" && (
            <Calendar
              mode={mode}
              selected={dateRange}
              onSelect={(date, selectedDay, activeModifiers, e) => {
                onSelect &&
                  onSelect(
                    date as (DateRange & Date & Date[]) | undefined,
                    selectedDay,
                    activeModifiers,
                    e
                  );
                setDateRange(date);
              }}
              disabled={disabledDays}
              {...props}
            />
          )}
          {mode === "single" && (
            <Calendar
              mode={mode}
              selected={(selected as Date) ?? date}
              onSelect={(date, selectedDay, activeModifiers, e) => {
                onSelect &&
                  onSelect(
                    date as (DateRange & Date & Date[]) | undefined,
                    selectedDay,
                    activeModifiers,
                    e
                  );
                setDate(date);
              }}
              disabled={disabledDays}
              {...props}
            />
          )}
          {mode === "multiple" && (
            <Calendar
              mode={mode}
              selected={(selected as Date[]) ?? multipleDates}
              onSelect={(dates, selectedDay, activeModifiers, e) => {
                onSelect &&
                  onSelect(
                    dates as (DateRange & Date & Date[]) | undefined,
                    selectedDay,
                    activeModifiers,
                    e
                  );
                setMultipleDates(dates as Date[]);
              }}
              disabled={disabledDays}
              {...props}
            />
          )}
        </PopoverContent>
      </Popover>
    );
  }
);
