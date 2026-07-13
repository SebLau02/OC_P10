import { lazy } from "react";

const Profile = lazy(() => import("./Profile/profile.tsx"));
const Activity = lazy(() => import("./Activity/activity.tsx"));
const AverageSessions = lazy(
  () => import("./AverageSessions/averageSessions.tsx"),
);
const PerformancePage = lazy(() => import("./Performance/performance.tsx"));
const Macros = lazy(() => import("./Macros/macros.tsx"));

export { Profile, Activity, AverageSessions, PerformancePage, Macros };
