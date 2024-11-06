import { create } from 'zustand';
import { createSetState, SetState } from './util';

interface IGlobalStates {
  topNavOffset: number;
  openMediaMenu: boolean;
  
  readonly setGlobalState: SetState<Omit<IGlobalStates, 'setGlobalState'>>;
}

const useGlobalStore = create<IGlobalStates>((set) => ({
  topNavOffset: 90,
  openMediaMenu: false,

  setGlobalState: createSetState<Omit<IGlobalStates, 'setGlobalState'>>(set),
}));

export default useGlobalStore;
