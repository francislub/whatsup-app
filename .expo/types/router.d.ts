/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/calls` | `/(tabs)/communities` | `/(tabs)/updates` | `/_sitemap` | `/callScreen` | `/calls` | `/cameraScreen` | `/communities` | `/updates` | `/userChat`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
