import Vue from 'vue'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    serverCacheKey?: any
  }
}

export interface Process {
  client: boolean;
  server: boolean;
  cwd (): string;
}
