"use client";

import React, { useState, useCallback, useMemo } from "react";
import CustomLayout from "../CustomLayout";
import { Button, Radio, RadioGroup, Spinner } from '@heroui/react';
import { Logo } from "../icons";

const DoodleButton = () => {
  // State for each prop
  const [color, setColor] = useState("default");
  const [variant, setVariant] = useState("solid");
  const [radius, setRadius] = useState("full");
  const [size, setSize] = useState("sm");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [iconType, setIconType] = useState("text"); // text, iconstart, iconend
  const [isIconOnly, setIsIconOnly] = useState(false);

  // Handlers (memoized)
  const handleColor = useCallback((v: string) => setColor(v), []);
  const handleVariant = useCallback((v: string) => setVariant(v), []);
  const handleRadius = useCallback((v: string) => setRadius(v), []);
  const handleSize = useCallback((v: string) => setSize(v), []);
  const handleDisable = useCallback((v: string) => setIsDisabled(v === "disable"), []);
  const handleLoading = useCallback((v: string) => setIsLoading(v === "loading"), []);
  const handleIcon = useCallback((v: string) => {
    setIconType(v);
    setIsIconOnly(false);
  }, []);
  const handleIconOnly = useCallback((v: string) => {
    setIsIconOnly(v === "icon");
    if (v === "icon") setIconType("iconstart");
  }, []);

  // Memoized Button props
  const buttonProps = useMemo(() => {
    const props: any = { color, variant, radius, size, isDisabled, isLoading };
    if (isLoading) props.spinner = <Spinner size="sm" />;
    if (isIconOnly) {
      props.isIconOnly = true;
      props.startContent = <Logo />;
    } else {
      if (iconType === "iconstart") props.startContent = <Logo />;
      if (iconType === "iconend") props.endContent = <Logo />;
    }
    return props;
  }, [color, variant, radius, size, isDisabled, isLoading, isIconOnly, iconType]);

  // Memoized Button children
  const buttonChildren = useMemo(() => {
    return isIconOnly ? "" : "ButtonUI";
  }, [isIconOnly]);

  // Memoized code string
  const code = useMemo(() => {
    const propStr = [
      `color=\"${color}\"`,
      `variant=\"${variant}\"`,
      `radius=\"${radius}\"`,
      `size=\"${size}\"`,
      isDisabled ? `isDisabled` : null,
      isLoading ? `isLoading` : null,
      isIconOnly ? `isIconOnly` : null,
      isLoading ? `spinner={<Spinner size=\"sm\" />}` : null,
      isIconOnly
        ? `startContent={<Logo />}`
        : iconType === "iconstart"
          ? `startContent={<Logo />}`
          : iconType === "iconend"
            ? `endContent={<Logo />}`
            : null,
    ].filter(Boolean).join(" ");
    return [
      `'use client';`,
      'import { Button } from "@heroui/react";',
      ' ',
      ' /** @NOTE :  Made with Next.js and HeroUI */',
      'const ButtonUI = () => {',
      '  return (',
      `    <Button ${propStr}>`,
      `      ${buttonChildren} `,
      '    </Button>',
      '  );',
      '};',
      '',
      'export default ButtonUI;',
      ' '
    ].join('\n');
  }, [color, variant, radius, size, isDisabled, isLoading, isIconOnly, iconType, buttonChildren]);

  // Design controls (static, not memoized as it depends on handlers only)
  const designData = (
    <>
      <RadioGroup label="Color" color="default" orientation="horizontal" defaultValue={color} onValueChange={handleColor}>
        <div className="flex flex-wrap gap-4 mb-4">
          <Radio value="default"> <Button color="default"> Default </Button> </Radio>
          <Radio value="primary"> <Button color="primary"> Primary </Button> </Radio>
          <Radio value="secondary"> <Button color="secondary"> Secondary </Button> </Radio>
          <Radio value="success"> <Button color="success"> Success </Button> </Radio>
          <Radio value="warning"> <Button color="warning"> Warning </Button> </Radio>
          <Radio value="danger"> <Button color="danger"> Danger </Button> </Radio>
        </div>
      </RadioGroup>
      <RadioGroup label="Variant" color="default" orientation="horizontal" defaultValue={variant} onValueChange={handleVariant}>
        <div className="flex flex-wrap gap-4 mb-4">
          <Radio value="solid"> <Button variant="solid"> Solid </Button> </Radio>
          <Radio value="faded"> <Button variant="faded"> Faded </Button> </Radio>
          <Radio value="bordered"> <Button variant="bordered"> Bordered </Button> </Radio>
          <Radio value="light"> <Button variant="light"> Light </Button> </Radio>
          <Radio value="flat"> <Button variant="flat"> Flat </Button> </Radio>
          <Radio value="ghost"> <Button variant="ghost"> Ghost </Button> </Radio>
          <Radio value="shadow"> <Button variant="shadow"> Shadow </Button> </Radio>
        </div>
      </RadioGroup>
      <RadioGroup label="Radius" color="default" orientation="horizontal" defaultValue={radius} onValueChange={handleRadius}>
        <div className="flex flex-wrap gap-4 mb-4">
          <Radio value="full"> <Button radius="full"> Full </Button> </Radio>
          <Radio value="lg"> <Button radius="lg"> Large </Button> </Radio>
          <Radio value="md"> <Button radius="md"> Medium </Button> </Radio>
          <Radio value="sm"> <Button radius="sm"> Small </Button> </Radio>
          <Radio value="none"> <Button radius="none"> None </Button> </Radio>
        </div>
      </RadioGroup>
      <RadioGroup label="Size" color="default" orientation="horizontal" defaultValue={size} onValueChange={handleSize}>
        <div className="flex flex-wrap gap-4 mb-4">
          <Radio value="sm"> <Button size="sm"> Small </Button> </Radio>
          <Radio value="md"> <Button size="md"> Medium </Button> </Radio>
          <Radio value="lg"> <Button size="lg"> Large </Button> </Radio>
        </div>
      </RadioGroup>
      <RadioGroup label="Disable" color="default" orientation="horizontal" defaultValue={isDisabled ? "disable" : "enable"} onValueChange={handleDisable}>
        <div className="flex flex-wrap gap-4 mb-4">
          <Radio value="enable"> <Button> Enable </Button> </Radio>
          <Radio value="disable"> <Button isDisabled> Disable </Button> </Radio>
        </div>
      </RadioGroup>
      <RadioGroup label="Loading" color="default" orientation="horizontal" defaultValue={isLoading ? "loading" : "normal"} onValueChange={handleLoading}>
        <div className="flex flex-wrap gap-4 mb-4">
          <Radio value="normal"> <Button> Normal </Button> </Radio>
          <Radio value="loading"> <Button isLoading spinner={<Spinner size="sm" />} /> </Radio>
        </div>
      </RadioGroup>
      <RadioGroup label="Icon" color="default" orientation="horizontal" defaultValue={iconType} onValueChange={handleIcon}>
        <div className="flex flex-wrap gap-4 mb-4">
          <Radio value="text"> <Button> ButtonUI </Button> </Radio>
          <Radio value="iconstart" isDisabled={isLoading}> <Button startContent={<Logo />}> ButtonUI </Button> </Radio>
          <Radio value="iconend" isDisabled={isLoading}> <Button endContent={<Logo />}> ButtonUI </Button> </Radio>
        </div>
      </RadioGroup>
      <RadioGroup label="Icon Only" color="default" orientation="horizontal" defaultValue={isIconOnly ? "icon" : "button"} onValueChange={handleIconOnly}>
        <div className="flex flex-wrap gap-4 mb-4">
          <Radio value="button"> <Button> Button </Button> </Radio>
          <Radio value="icon" isDisabled={isLoading}> <Button isIconOnly startContent={<Logo />} /> </Radio>
        </div>
      </RadioGroup>
    </>
  );

  // Preview: single Button with selected props
  const preview = (<Button {...buttonProps}> {buttonChildren} </Button>);

  return <CustomLayout design={designData} preview={preview} code={code} />;
};

export default DoodleButton;
