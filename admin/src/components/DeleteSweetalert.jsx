import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import BasicProvider from "../authentications/BasicProvider";
import { MdDelete } from "react-icons/md";

function DeleteSweetalert({ type, deleteID, multiDelete, refresh }) {
  const basicProvider = BasicProvider();

  const handeleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      console.log(type, deleteID, multiDelete);

      let response = "";

      if (multiDelete) {
        let endpoint = `configuration/status/${type}`;
        response = await basicProvider.postMethod(
          endpoint,
          JSON.stringify(multiDelete)
        );
        console.log(response);
      } else {
        const endpoint = `configuration/status/${type}/${deleteID}`;
        response = await basicProvider.deleteMethod(endpoint);
      }
      Swal.fire({
        title: "Deleted!",
        text: response.message,
        icon: response.status,
      });
      refresh();
    }
  };

  return (
    <>
      <MdDelete
        className="text-red-600 cursor-pointer"
        onClick={handeleDelete}
      />
    </>
  );
}

export default DeleteSweetalert;
