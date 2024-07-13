import { AreaChart, BarChart3, FileSearch, LineChart } from "lucide-react";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartType } from "@/types/chart";
import { AreaVariant } from "@/components/chart/area-variant";
import { BarVariant } from "@/components/chart/bar-variant";
import { LineVariant } from "@/components/chart/line-variant";
import { ChartTypeEnum } from "@/constants/enum/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  data?: ChartType[];
};

export const Chart = ({ data = [] }: Props) => {
  const [chartType, setChartType] = useState(ChartTypeEnum.AREA);

  const onTypeChange = (type: ChartTypeEnum) => {
    setChartType(type);
  };

  const renderChart = () => {
    switch (chartType) {
      case ChartTypeEnum.AREA:
        return <AreaVariant data={data} />;
      case ChartTypeEnum.BAR:
        return <BarVariant data={data} />;
      case ChartTypeEnum.LINE:
        return <LineVariant data={data} />;
      default:
        return <></>;
    }
  };

  return (
    <Card className='border-none drop-shadow-sm'>
      <CardHeader className='flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between'>
        <CardTitle className='text-xl line-clamp-1'>Transactions</CardTitle>
        <Select defaultValue={chartType} onValueChange={onTypeChange}>
          <SelectTrigger className='lg:w-auto h-9 rounded-md px-3'>
            <SelectValue placeholder='Chart type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ChartTypeEnum.AREA}>
              <div className='flex items-center'>
                <AreaChart className='size-4 mr-2 shrink-0' />
                <p className='line-clamp-1'>Area chart</p>
              </div>
            </SelectItem>
            <SelectItem value={ChartTypeEnum.BAR}>
              <div className='flex items-center'>
                <BarChart3 className='size-4 mr-2 shrink-0' />
                <p className='line-clamp-1'>Bar chart</p>
              </div>
            </SelectItem>
            <SelectItem value={ChartTypeEnum.LINE}>
              <div className='flex items-center'>
                <LineChart className='size-4 mr-2 shrink-0' />
                <p className='line-clamp-1'>Line chart</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className='flex flex-col gap-y-4 items-center justify-center h-[350px] w-full'>
            <FileSearch className='size-6 text-muted-foreground' />
            <p className='text-muted-foreground text-sm'>
              No data for this period
            </p>
          </div>
        ) : (
          <>{renderChart()}</>
        )}
      </CardContent>
    </Card>
  );
};
