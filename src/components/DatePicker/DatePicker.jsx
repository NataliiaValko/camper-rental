import { useField, useFormikContext } from "formik";
import { format, addYears } from "date-fns";

export default function DatePicker({ className, ...props }) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(field.name, value);
  };

  const formattedValue = field.value
    ? format(new Date(field.value), "yyyy-MM-dd")
    : "";

  const today = format(new Date(), "yyyy-MM-dd");
  const nextYear = format(addYears(new Date(), 2), "yyyy-MM-dd");

  return (
    <input
      type="date"
      placeholder="Booking date"
      id={props.id || props.name}
      name={field.name}
      value={formattedValue}
      onChange={handleChange}
      className={className}
      min={today}
      max={nextYear}
      {...props}
    />
  );
}
