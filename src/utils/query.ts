import { NavigateFunction } from 'react-router-dom'

import { stringify, parse,  } from 'query-string'


export function objToQuery (obj: Record<string, any>) {
  return stringify(obj, { skipNull: true, skipEmptyString: true });
}

export const queryToObj = (query: string) => parse(query);

export const pushHistoryQuery = (
  query: Record<string, any>,
  navigate: NavigateFunction,
) => {
  const historyQuery = queryToObj(window.location.search);

  const newQuery = historyQuery ? objToQuery({ ...historyQuery, ...query }) : objToQuery(query);

  const pathname = window.location.pathname;
  navigate(`${pathname}?${newQuery}`);
};

export const resolveQueryStart = (query?: string) =>
  query ? (query[0] === '?' ? query : `?${query}`) : '';
