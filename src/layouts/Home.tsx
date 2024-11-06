import { LightModeBox } from "@/components/ColorModeForce";
import Topbar from "@/sections/home/Topbar";
import useGlobalStore from "@/stores";
import { Stack } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

interface IHomeLayout {
  usePaddingTop?: boolean;
}
const HomeLayout: FC<PropsWithChildren & IHomeLayout> = (props) => {
  const [openMediaMenu, setGlobalState, topNavOffset] = useGlobalStore(
    (state) => [state.openMediaMenu, state.setGlobalState, state.topNavOffset]
  );

  return (
    <LightModeBox>
      <Stack minH="100vh" gap={0}>
        <Topbar />
      </Stack>
    </LightModeBox>
  );
};

export default HomeLayout;
