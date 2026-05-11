"use client";
import {
  Button,
  Card,
  FieldError,
  Select,
  ListBox,
  Modal,
  TextField,
  Label,
  Input,
  TextArea,
} from "@heroui/react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
const EditModal = ({ destinationDetails }) => {
  const router = useRouter();
  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destinationDetails;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    const res = await fetch(
      `http://localhost:5000/api/v1/destinations/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(destination),
      },
    );
    const data = await res.json();
    if (data.modifiedCount > 0) {
      router.refresh();
    }
  };
  return (
    <Modal>
      <Modal.Trigger>
        <button className="flex items-center gap-2 border px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
          <Pencil size={14} />
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-7xl">
            <Modal.CloseTrigger />
            <Modal.Body className="p-6">
              <Card>
                <div className="p-6">
                  <Modal.Header className="text-2xl font-bold mb-3">
                    <Modal.Heading className="text-2xl font-bold mb-3">
                      Edit Destination
                    </Modal.Heading>
                  </Modal.Header>
                  <form onSubmit={onSubmit} className=" space-y-5">
                    <div>
                      <TextField
                        defaultValue={destinationName}
                        name="destinationName"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={country}
                        name="country"
                        isRequired
                      >
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
                        <Select
                          defaultValue={category}
                          name="category"
                          isRequired
                          className="w-full"
                        >
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
                              <ListBox.Item
                                id="Adventure"
                                textValue="Adventure"
                              >
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
                      <TextField
                        defaultValue={price}
                        name="price"
                        type="number"
                        isRequired
                      >
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

                      <TextField
                        defaultValue={duration}
                        name="duration"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={departureDate}
                        name="departureDate"
                        type="date"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
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
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
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
                        slot="close"
                        type="button"
                        variant="outline"
                        className="rounded-none border border-red-400 px-6 py-3 text-red-500 bg-white hover:bg-red-50"
                      >
                        Cancel
                      </Button>
                      <Button
                        slot="close"
                        type="submit"
                        className="rounded-none bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
