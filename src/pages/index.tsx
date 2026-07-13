import { lazy } from "react";

const Profile = lazy(() => import("./Profile/profile.tsx"));
const Activity = lazy(() => import("./Activity/activity.tsx"));

export { Profile, Activity };
