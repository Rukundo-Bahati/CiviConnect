import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/utils/translations"

export default function PreferencesAdmin() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-display">
          {t("admin.preferences")}
        </h1>
        <p className="text-muted-foreground mt-2">
          {t("admin.preferences.description")}
        </p>
      </div>

      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList>
          <TabsTrigger value="notifications">
            {t("admin.notifications")}
          </TabsTrigger>
          <TabsTrigger value="api">
            {t("admin.apiIntegration")}
          </TabsTrigger>
          <TabsTrigger value="departments">
            {t("admin.departmentSettings")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>{t("notifications.title")}</CardTitle>
              <CardDescription>
                {t("notifications.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Switch id="newComplaints" />
                <div className="space-y-1">
                  <Label htmlFor="newComplaints">
                    {t("notifications.newComplaints.label")}
                  </Label>
                  <p className="text-muted-foreground">
                    {t("notifications.newComplaints.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Switch id="statusUpdates" />
                <div className="space-y-1">
                  <Label htmlFor="statusUpdates">
                    {t("notifications.statusUpdates.label")}
                  </Label>
                  <p className="text-muted-foreground">
                    {t("notifications.statusUpdates.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Switch id="citizenRegistrations" />
                <div className="space-y-1">
                  <Label htmlFor="citizenRegistrations">
                    {t("notifications.citizenRegistrations.label")}
                  </Label>
                  <p className="text-muted-foreground">
                    {t("notifications.citizenRegistrations.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Switch id="dailyDigest" />
                <div className="space-y-1">
                  <Label htmlFor="dailyDigest">
                    {t("notifications.dailyDigest.label")}
                  </Label>
                  <p className="text-muted-foreground">
                    {t("notifications.dailyDigest.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Switch id="weeklyReport" />
                <div className="space-y-1">
                  <Label htmlFor="weeklyReport">
                    {t("notifications.weeklyReport.label")}
                  </Label>
                  <p className="text-muted-foreground">
                    {t("notifications.weeklyReport.description")}
                  </p>
                </div>
              </div>
              <Button type="submit" className="mt-6">
                {t("buttons.saveNotifications")}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>{t("api.title")}</CardTitle>
              <CardDescription>
                {t("api.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="apiKey">{t("api.apiKey.label")}</Label>
                <div className="flex items-center space-x-2">
                  <Input id="apiKey" value="abc123xyz" readOnly />
                  <Button type="button">{t("api.copyKey")}</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("api.apiKey.error")}
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="webhookUrl">{t("api.webhookUrl.label")}</Label>
                <Input id="webhookUrl" placeholder="https://example.com/webhook" />
                <p className="text-sm text-muted-foreground">
                  {t("api.webhookUrl.error")}
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Switch id="allowPublicAccess" />
                <div className="space-y-1">
                  <Label htmlFor="allowPublicAccess">
                    {t("api.allowPublic.label")}
                  </Label>
                  <p className="text-muted-foreground">
                    {t("api.allowPublic.description")}
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="rateLimitPerMinute">
                  {t("api.rateLimit.label")}
                </Label>
                <Input id="rateLimitPerMinute" type="number" defaultValue={60} />
                <p className="text-sm text-muted-foreground">
                  {t("api.rateLimit.error")}
                </p>
              </div>
              <Button type="submit" className="mt-6">
                {t("buttons.saveApi")}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle>{t("departments.title")}</CardTitle>
              <CardDescription>
                {t("departments.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Switch id="autoAssignment" />
                <div className="space-y-1">
                  <Label htmlFor="autoAssignment">
                    {t("departments.autoAssignment.label")}
                  </Label>
                  <p className="text-muted-foreground">
                    {t("departments.autoAssignment.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Switch id="notifyManager" />
                <div className="space-y-1">
                  <Label htmlFor="notifyManager">
                    {t("departments.notifyManager.label")}
                  </Label>
                  <p className="text-muted-foreground">
                    {t("departments.notifyManager.description")}
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="escalationHours">
                  {t("departments.escalation.label")}
                </Label>
                <Input id="escalationHours" type="number" defaultValue={48} />
                <p className="text-sm text-muted-foreground">
                  {t("departments.escalation.description")}
                </p>
              </div>
              <div className="space-y-1">
                <Label htmlFor="defaultPriority">
                  {t("departments.defaultPriority.label")}
                </Label>
                <select
                  id="defaultPriority"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  defaultValue="medium"
                >
                  <option value="low">{t("priority.low")}</option>
                  <option value="medium">{t("priority.medium")}</option>
                  <option value="high">{t("priority.high")}</option>
                </select>
                <p className="text-sm text-muted-foreground">
                  {t("departments.defaultPriority.description")}
                </p>
              </div>
              <Button type="submit" className="mt-6">
                {t("buttons.saveDepartments")}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
