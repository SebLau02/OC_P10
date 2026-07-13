import { lazy } from "react";

const Profile = lazy(() => import("./Profile/profile.tsx"));
const Activity = lazy(() => import("./Activity/activity.tsx"));
const AverageSessions = lazy(
  () => import("./AverageSessions/averageSessions.tsx"),
);

export { Profile, Activity, AverageSessions };
