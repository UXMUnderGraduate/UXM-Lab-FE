import React from 'react';
import Heading from '../../components/ui/Heading';

export default function Research() {
  return (
    <>
      <Heading>Research</Heading>
      <div className="font-semibold text-2xl sm:text-3xl mb-10 sm:mb-20 pl-3">
        <h1>BlockChain</h1>
        <p className="sm:text-2xl my-5 sm:mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <h1>AR glass</h1>
        <p className="sm:text-2xl my-5 sm:mb-10">
          이 프로젝트는 Nreal AR Glasses를 착용한 사용자의 시야 내에 기기가 탐지되면, 트래킹된 손의 제스쳐를 통해 해당 기기를 원격 제어할 수 있도록 구현되었다.
          Nreal에서 제공하는 NRSDK를 커스텀하여 만든 Unity 기반의 Android App을 사용한다. 사용자가 Nreal AR Glasses를 착용하면 내장된 Image Tracking 기능으로
          목표 기기가 탐지된다. 이어 해당 기기를 제어할 수 있는 UI가 표시되면, 사용자는 손동작으로 기기를 제어할 수 있게 된다. 사용자가 손으로 해당 UI를
          제어하는 제스쳐를 취하면, 내장된 Hand Tracking 기능은 Unity의 Raycast 방식으로 타겟팅된 UI의 버튼과 상호작용 할 수 있도록 한다. 사용자가 UI의 버튼에
          액션을 취하면, Smartthings Cloud에 Http request로 기기 제어 신호가 전송된다. 마지막으로 Smartthings Cloud는 기기에게 제어 신호를 전달하여 기기를
          제어한다.
        </p>
      </div>
    </>
  );
}
