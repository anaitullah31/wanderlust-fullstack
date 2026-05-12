"use client";
import { AlertDialog, Button, Modal } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
const DeleteAlert = ({ destinationDetails }) => {
  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:5000/api/v1/destinations/${destinationDetails._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "applicaton/json",
        },
      },
    );
    const data = await res.json();
    if (data.deletedCount > 0) {
      redirect("/destinations");
    }
  };
  return (
    <AlertDialog>
      <Modal.Trigger>
        <button className="flex items-center gap-2 cursor-pointer border border-red-200 px-4 py-2 text-sm text-red-500 hover:bg-red-50">
          <Trash2 size={14} />
          Delete
        </button>
      </Modal.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100 rounded-md">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Destination Permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destinationDetails.destinationName}</strong> and all of
                its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                slot="close"
                type="button"
                className="rounded-none border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                type="button"
                className="rounded-none bg-red-600 px-6 py-3 text-white hover:bg-red-700 transition-colors"
              >
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteAlert;
