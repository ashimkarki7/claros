import { httpBase } from './httpBaseUtil.ts';
import type { IObjectLiteral } from '@/types/type.ts';

export function v2Fetch(endpoint: string) {
  return httpBase().get(`${endpoint}`);
}

export function store(endpoint: string, data: IObjectLiteral) {
  return httpBase().post(`${endpoint}`, data);
}
