import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RecentActivity() {
  return (
    <Card className="bg-blue-950 text-white sm:max-xl:mt-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Recently Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            10:40 AM, Fri 13 Sep 2021
          </p>
          <div className="space-y-1">
            <h4 className="text-sm font-medium">You Posted a New Job</h4>
            <p className="text-sm text-muted-foreground">
              Kindly check the requirements and terms of work and make sure
              everything is right.
            </p>
          </div>
        </div>
        <div className="flex max-xl:flex-col flex-row xl:items-center xl:justify-between gap-2 md:gap-4 lg:max-xl:gap-8">
          <p className="text-sm text-muted-foreground">
            Today you makes 12 Activity
          </p>
          <Button variant="link" size="sm" className=" bg-red-500 text-white">
            See All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
