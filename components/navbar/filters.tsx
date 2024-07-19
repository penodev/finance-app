import { AccountFilter } from "@/components/navbar/account-filter";
import { DateFilter } from "@/components/navbar/date-filter";

export const Filters = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2'>
      <AccountFilter />
      <DateFilter />
    </div>
  );
};
