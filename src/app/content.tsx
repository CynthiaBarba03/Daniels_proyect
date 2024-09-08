"use client";

import React, { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Password } from "@/components/password";

interface TopicItem {
  id: string;
  name: string;
  type: string;
  password: string;
  description: string;
}
export function Content() {
  const [showModal, setShowModal] = useState(false);

  const [open, setOpen] = useState(false);
  const [savedTopic, setSavedTopic] = useState<TopicItem>();
  const [isCreating, SetIsCreating] = useState(true);

  const [topic, seTopic] = useState([
    {
      id: uuidv4(),
      name: "Elecciones Feu",
      type: "open",
      password: "",
      description:
        "Las elecciones en Cuba son un proceso político y electoral que tiene lugar en la República de Cuba. Están reguladas por la Constitución cubana y se realizan según un sistema multipartidista, aunque con ciertas...",
    },
    {
      id: uuidv4(),
      name: "Elecciones Feu2",
      type: "open",
      password: "",
      description:
        "Las elecciones en Cuba son un proceso político y electoral que tiene lugar en la República de Cuba. Están reguladas por la Constitución cubana y se realizan según un sistema multipartidista, aunque con ciertas...",
    },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    type: "open",
    password: "",
    description: "",
  });
  const handleOpen = () => {
    setOpen(!open);
    SetIsCreating(true);
    console.log(open, isCreating, "here");
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    if (!validateForm()) {
      return;
    }
    seTopic([
      ...topic,
      {
        id: uuidv4(),
        name: formData.name,
        type: formData.type,
        password: formData.password,
        description: formData.description,
      },
    ]);

    setFormData({
      name: "",
      type: "open",
      password: "",
      description: "",
    });
    setOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name, e.target.value);

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const validateForm = () => {
    const valuesWithoutPassword = Object.fromEntries(
      Object.entries(formData).filter(([key]) => key !== "password")
    );
    return Object.values(valuesWithoutPassword).every((value) => value !== "");
  };

  //eliminar debate
  const deleteDebate = (id: string) => {
    const nuevosDebates = topic.filter((topic) => topic.id !== id);
    seTopic(nuevosDebates);
  };

  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <Dialog
          placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          size="sm"
          open={open}
          handler={handleOpen}
          className="p-4"
        >
          <DialogHeader
            placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="relative m-0 block"
          >
            <Typography
              placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="h4"
              color="blue-gray"
            >
              {isCreating ? "Agregar Debate" : "Escriba Contrasenna"}
            </Typography>

            <IconButton
              placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              size="sm"
              variant="text"
              className="!absolute right-3.5 top-3.5"
              onClick={handleOpen}
            >
              <XMarkIcon className="h-4 w-4 stroke-2" />
            </IconButton>
          </DialogHeader>
          <DialogBody
            placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="space-y-4 pb-6"
          >
            {isCreating ? (
              <div>
                {" "}
                <div>
                  <Typography
                    placeholder=""
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium"
                  >
                    Nombre
                  </Typography>
                  <Input
                    crossOrigin={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color="gray"
                    size="lg"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre del Tema"
                    name="name"
                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    placeholder=""
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium"
                  >
                    Tipo
                  </Typography>
                  <Select
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                    placeholder="1"
                    name="type"
                    value={formData.type}
                    onChange={(e: any) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        ["type"]: e,
                      }))
                    }
                    labelProps={{
                      className: "hidden",
                    }}
                  >
                    <Option value="open">Abierto</Option>
                    <Option value="closed">Cerrado</Option>
                  </Select>
                </div>
                <div className="flex gap-4">
                  <div className="w-full">
                    {formData.type === "closed" && (
                      <Input
                        name="password"
                        color="gray"
                        onPointerEnterCapture={undefined}
                        crossOrigin={undefined}
                        onPointerLeaveCapture={undefined}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="********"
                        label="Password"
                        type="password"
                        size="lg"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <Typography
                    placeholder=""
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    variant="small"
                    color="blue-gray"
                    className="mb-2 text-left font-medium"
                  >
                    Descripción
                  </Typography>
                  <Textarea
                    placeholder=""
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    rows={7}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
              </div>
            ) : (
              savedTopic && <Password topic={savedTopic}></Password>
            )}
          </DialogBody>
          <DialogFooter
            placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Button
              placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={handleSubmit}
              className="ml-auto"
            >
              Enviar
            </Button>
          </DialogFooter>
        </Dialog>
        <div className="container mx-auto space-y-5 px-4 py-20">
          <div className="w-full mb-10 md:flex items-center justify-between">
            <div className="flex mb-5 md:mb-0 items-center gap-3">
              <Button
                placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                size="sm"
                color="gray"
                variant="outlined"
              >
                stories
              </Button>
              <Button
                placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                size="sm"
                color="gray"
                variant="outlined"
              >
                design
              </Button>
              <Button
                placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                size="sm"
                color="gray"
                variant="outlined"
              >
                catle
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button
                placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={() => {
                  handleOpen();
                }}
                color="gray"
                className="w-1/2 md:w-fit flex-shrink-0"
                size="md"
              >
                Crear Debate
              </Button>
            </div>
          </div>
          {topic.map((t, i) => {
            return (
              <div key={i} className=" md:flex items-center justify-between">
                <div className="mb-4 md:mb-0 md:flex items-center gap-5 max-w-2xl">
                  <div>
                    <Typography
                      placeholder=""
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      variant="h5"
                      className="mb-4 md:mb-0"
                      color="blue-gray"
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      placeholder=""
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      className="w-full md:w-10/12 font-normal !text-gray-500"
                    >
                      {t.description}
                    </Typography>
                  </div>
                </div>{" "}
                <div className="flex  gap-4 ">
                  <Button
                    onClick={() => {
                      if (t.type === "closed") {
                        console.log("acaaa", t.password);
                        setOpen(!open);
                        setSavedTopic(t);
                        SetIsCreating(false);
                      } else {
                        window.location.href = `/comments/${t.id}?name=${t.name}`;
                      }
                    }}
                    placeholder=""
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color="gray"
                    className="w-1/2 md:w-fit flex-shrink-0"
                    size="md"
                  >
                    Participar
                  </Button>

                  <Button
                    placeholder=""
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    color="gray"
                    className="w-1/2 md:w-fit flex-shrink-0"
                    size="md"
                    onClick={() => {
                      deleteDebate(t.id);
                    }}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Content;
