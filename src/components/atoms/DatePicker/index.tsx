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
  field?: any;
  onChange?: (date: Date | DateRange | Date[] | undefined) => void;
} & DayPickerProps;

type DatePickerSingleOrDefaultProps = BaseDatePickerProps & {
  mode: "single" | "multiple";
};

type DatePickerRangeProps = BaseDatePickerProps & {
  mode: "range";
  dayRangeFrom?: Date;
  dayRangeTo?: Date;
};

export const DatePicker: React.FC<
  DatePickerRangeProps | DatePickerSingleOrDefaultProps
> = ({ triggerButtonClassName, placeholder, prefixIcon, mode, ...props }) => {
  const [date, setDate] = React.useState<Date>();
  const [multipleDates, setMultipleDates] = React.useState<Date[]>([]);
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from:
      mode === "range"
        ? (props as DatePickerRangeProps).dayRangeFrom
        : undefined,
    to:
      mode === "range" ? (props as DatePickerRangeProps).dayRangeTo : undefined,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "flex w-[280px] items-center justify-start rounded-md border px-4 py-2 text-left font-normal transition-colors duration-200 ease-in-out hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50",
            (!date || !dateRange || !multipleDates.length) &&
              "text-muted-foreground",
            triggerButtonClassName
          )}
        >
          {prefixIcon ? (
            <span className='mr-2'>{prefixIcon}</span>
          ) : (
            <CalendarIcon className='mr-2 h-4 w-4' />
          )}
          {date ? (
            format(date, "PPP")
          ) : (
            <span>{placeholder ? placeholder : "Pick a date"}</span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        {mode === "range" && (
          <Calendar mode={mode} selected={dateRange} onSelect={setDateRange} />
        )}
        {mode === "single" && (
          <Calendar mode={mode} selected={date} onSelect={setDate} />
        )}
        {mode === "multiple" && (
          <Calendar
            mode={mode}
            selected={multipleDates}
            onSelect={(dates: Date[] | undefined) =>
              setMultipleDates(dates || [])
            }
            initialFocus
          />
        )}
      </PopoverContent>
    </Popover>
  );
};
1;
