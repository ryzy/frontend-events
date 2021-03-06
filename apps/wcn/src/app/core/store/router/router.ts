import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export const ROUTER_STORE_NAME = 'router';

/**
 * Possible URL params used in the app
 */
export interface AppRouterParams extends Params {
  eventId?: string;

  apiKey?: string; // on /user pages

  // events filters
  where?: string;
  tags?: string;
  ws?: string; // workshops
  fws?: string; // free workshops

  // sort info
  s?: string; // sort by info
  sd?: 'desc'; // sort direction. only `desc` since `asc` is by default, so it shouldn't appear in url
}

/**
 * App custom router state
 */
export interface AppRouterState {
  /**
   * Clean URL, w/o any params, query params or fragment
   */
  url: string;

  /**
   * Full URL, with whatever is present there (custom params, query params, fragment etc)
   */
  urlFull: string;

  /**
   * Any `data` added to Route config
   */
  data: { [name: string]: any };

  /**
   * Current #fragment (or empty string)
   */
  fragment: string;

  /**
   * URL :params
   */
  params: AppRouterParams;

  /**
   * URL ?query=params
   */
  queryParams: Params;
}

export const defaultAppRouterState: AppRouterState = {
  url: '/',
  urlFull: '/',
  data: {},
  fragment: '',
  params: {},
  queryParams: {},
};

export function getAppRouterState(state: any): AppRouterState {
  return (
    (state && state[ROUTER_STORE_NAME] && (state[ROUTER_STORE_NAME] as RouterReducerState<AppRouterState>).state) ||
    defaultAppRouterState
  );
}
