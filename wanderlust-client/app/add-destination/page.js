"use client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const AddDestinationPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/destinations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    const data = await res.json();
    console.log(data.insertedId);
    if(data.insertedId){
      redirect("/destinations");
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-8">
      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">Add Destination Page</h2>
          <form onSubmit={onSubmit} className=" space-y-5">
            <div>
              <TextField name="destinationName" isRequired>
                <Label className="text-sm font-medium text-black">
                  Destination Name
                </Label>
                <Input
                  placeholder="Bali Paradise"
                  className="mt-2 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
                />
                <FieldError />
              </TextField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField name="country" isRequired>
                <Label className="text-sm font-medium text-black">
                  Country
                </Label>
                <Input
                  placeholder="Indonesia"
                  className="mt-2 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
                />
                <FieldError />
              </TextField>

              <div>
                <Select name="category" isRequired className="w-full">
                  <Label className="text-sm font-medium text-black">
                    Category
                  </Label>
                  <Select.Trigger className="mt-2 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none flex items-center justify-between">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Beach" textValue="Beach">
                        Beach
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mountain" textValue="Mountain">
                        Mountain
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="City" textValue="City">
                        City
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Adventure" textValue="Adventure">
                        Adventure
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Cultural" textValue="Cultural">
                        Cultural
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField name="price" type="number" isRequired>
                <Label className="text-sm font-medium text-black">
                  Price (USD)
                </Label>
                <Input
                  type="number"
                  placeholder="e.g., 1299"
                  className="mt-2 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
                />
                <FieldError />
              </TextField>

              <TextField name="duration" isRequired>
                <Label className="text-sm font-medium text-black">
                  Duration
                </Label>
                <Input
                  placeholder="e.g., 7 Days / 6 Nights"
                  className="mt-2 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
                />
                <FieldError />
              </TextField>
            </div>

            <div>
              <TextField name="departureDate" type="date" isRequired>
                <Label className="text-sm font-medium text-black">
                  Departure Date
                </Label>
                <Input
                  type="date"
                  className="mt-2 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
                />
                <FieldError />
              </TextField>
            </div>

            <div>
              <TextField name="imageUrl" isRequired>
                <Label className="text-sm font-medium text-black">
                  Image URL
                </Label>
                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="mt-2 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
                />
                <FieldError />
              </TextField>
            </div>

            <div>
              <TextField name="description" isRequired>
                <Label className="text-sm font-medium text-black">
                  Description
                </Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="mt-2 min-h-36 w-full rounded-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none"
                />
                <FieldError />
              </TextField>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="rounded-none border border-red-400 px-6 py-3 text-red-500 bg-white hover:bg-red-50"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="rounded-none bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700"
              >
                Add Travel Package
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default AddDestinationPage;
