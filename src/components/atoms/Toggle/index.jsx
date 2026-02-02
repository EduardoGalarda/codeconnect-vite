import { Switch } from "@/components/ui/switch"

const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme-toggle" checked={isChecked} onCheckedChange={handleChange} />
    </div>
  );
};

export default Toggle
