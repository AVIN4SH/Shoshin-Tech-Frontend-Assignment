import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  className?: string;
  trend?: {
    value: number;
    label: string;
  };
  chart?: React.ReactNode;
}

export function StatCard({
  title,
  value,
  subtitle,
  className,
  trend,
  chart,
}: StatCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold">{value}</div>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
            {trend && (
              <div className="flex items-center space-x-2 mt-2">
                <span
                  className={cn(
                    "text-xs font-medium",
                    trend.value > 0 ? "text-green-500" : "text-red-500"
                  )}
                >
                  {trend.value > 0 ? "+" : ""}
                  {trend.value}%
                </span>
                <span className="text-xs text-muted-foreground">
                  {trend.label}
                </span>
              </div>
            )}
          </div>
          {chart && <div className="w-24 h-12">{chart}</div>}
        </div>
      </CardContent>
    </Card>
  );
}
