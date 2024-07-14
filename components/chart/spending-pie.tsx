import { FileSearch, Loader2, PieChart, Radar, Target } from "lucide-react";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryType } from "@/types/chart";
import { PieChartTypeEnum } from "@/constants/enum/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PieVariant } from "@/components/chart/pie-variant";
import { RadarVariant } from "@/components/chart/radar-variant";
import { RadialVariant } from "@/components/chart/radial-variant";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  data?: CategoryType[];
};

export const SpendingPie = ({ data = [] }: Props) => {
  const [chartType, setChartType] = useState(PieChartTypeEnum.PIE);

  const onTypeChange = (type: PieChartTypeEnum) => {
    setChartType(type);
  };

  const renderChart = () => {
    switch (chartType) {
      case PieChartTypeEnum.PIE:
        return <PieVariant data={data} />;
      case PieChartTypeEnum.RADAR:
        return <RadarVariant data={data} />;
      case PieChartTypeEnum.RADIAL:
        return <RadialVariant data={data} />;
      default:
        return <></>;
    }
  };

  return (
    <Card className='border-none drop-shadow-sm'>
      <CardHeader className='flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between'>
        <CardTitle className='text-xl line-clamp-1'>Categories</CardTitle>
        <Select defaultValue={chartType} onValueChange={onTypeChange}>
          <SelectTrigger className='lg:w-auto h-9 rounded-md px-3'>
            <SelectValue placeholder='Chart type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={PieChartTypeEnum.PIE}>
              <div className='flex items-center'>
                <PieChart className='size-4 mr-2 shrink-0' />
                <p className='line-clamp-1'>Pie chart</p>
              </div>
            </SelectItem>
            <SelectItem value={PieChartTypeEnum.RADAR}>
              <div className='flex items-center'>
                <Radar className='size-4 mr-2 shrink-0' />
                <p className='line-clamp-1'>Radar chart</p>
              </div>
            </SelectItem>
            <SelectItem value={PieChartTypeEnum.RADIAL}>
              <div className='flex items-center'>
                <Target className='size-4 mr-2 shrink-0' />
                <p className='line-clamp-1'>Radial chart</p>
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

export const SpendingPieLoading = () => {
  return (
    <Card className='border-none drop-shadow-sm'>
      <CardHeader className='flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between'>
        <Skeleton className='h-8 w-48' />
        <Skeleton className='h-8 lg:w-[120px] w-full' />
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-y-4 items-center justify-center h-[350px] w-full'>
          <Loader2 className='h-6 w-6 text-slate-300 animate-spin' />
        </div>
      </CardContent>
    </Card>
  );
};
