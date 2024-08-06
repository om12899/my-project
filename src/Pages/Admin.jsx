import DataTable, { createTheme } from "react-data-table-component";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Input,
  Textarea,
} from "@headlessui/react";
import React, { useCallback, useState } from "react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import api from "../api/axios";
import { clsx } from "clsx";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [data, setData] = useState([]);
  const [emailData, setEmailData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    content: "",
  });

  const columns = [
    {
      name: "From",
      selector: (row) => `${row.firstName} ${row.lastName}`,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Received On",
      selector: (row) =>
        dayjs(row.submittedDate).format("DD MMM YYYY, hh:mm:ss a "),
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => {
            setEmailData({
              firstName: row.firstName,
              lastName: row.lastName,
              email: row.email,
              subject: row.subject,
              content: row.content,
            });
            setOpen(true);
          }}
        >
          View
        </button>
      ),
    },
  ];
  const fetchResponses = async () => {
    try {
      const response = await api.get("/responses");
      setData(response.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching responses");
    }
  };

  createTheme(
    "solarized",
    {
      text: {
        primary: "#f7f8f3",
        secondary: "#addcca",
      },
      background: {
        default: "#232323",
      },
      context: {
        background: "#232323",
        text: "#addcca",
      },
      divider: {
        default: "#9e9e9e",
      },
      button: {
        default: "#addcca",
        hover: "#f7f8f3",
      },
      sortFocus: {
        default: "#2aa198",
      },
    },
    "dark"
  );

  const validatePassword = useCallback(() => {
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setPasswordCorrect(true);
      fetchResponses();
    } else {
      alert("Incorrect Password");
    }
  }, [password]);

  return (
    <div>
      {passwordCorrect ? (
        <div>
          <p className="text-3xl text-light-blue">Welcome to Admin Dashboard</p>
          <div className="mt-8"></div>
          <DataTable
            responsive
            theme="solarized"
            columns={columns}
            data={data}
          />
        </div>
      ) : (
        <div>
          <p className="text-xl mt-12 text-light-blue">
            Please Enter Password to proceed
          </p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border text-light-blue border-light-blue rounded-md  p-2 mt-2"
            type="password"
          />
          <button
            onClick={validatePassword}
            className="bg-dark-gray mx-4 text-light-blue border border-light-blue rounded-md  p-2 mt-2"
          >
            Submit
          </button>
          <p className="text-xl mt-12 text-light-gray">
            If you are not the owner of this site, please explore other sections
            of the website.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-dark-gray mx-4 text-light-gray  rounded-md  p-2 mt-2"
          >
            Home
          </button>
        </div>
      )}

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
            >
              <div className="bg-dark-gray px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-dark-gray sm:mx-0 sm:h-10 sm:w-10">
                    <EnvelopeIcon className="w-6 h-6 text-light-gray" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-light-gray font-semibold leading-6"
                    >
                      Hi Om, we have received a response from{" "}
                      {emailData.firstName} {emailData.lastName}
                      <div className="flex mb-2 mt-4 items-center">
                        <p className="w-1/5 font-semibold">Email ID:</p>
                        <Input
                          disabled
                          className={clsx(
                            " block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-light-blue"
                          )}
                          value={emailData.email}
                          type="text"
                        />
                      </div>
                      <div className="flex mb-2 items-center">
                        <p className="w-1/5  font-semibold">Subject:</p>
                        <Input
                          disabled
                          className={clsx(
                            " block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-light-blue"
                          )}
                          value={emailData.subject}
                          type="text"
                        />
                      </div>
                      <div className="flex mb-2 items-center">
                        <Textarea
                          disabled
                          className={clsx(
                            "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-light-blue"
                          )}
                          value={emailData.content}
                          type="text"
                          rows={5}
                        />
                      </div>
                    </DialogTitle>
                    <div className="mt-2 text-sm text-light-gray"></div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-gray px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-light-blue px-3 py-2 text-sm font-semibold text-dark-gray shadow-sm hover:text-light-gray hover:border hover:border-light-blue hover:bg-dark-gray sm:ml-3 sm:w-auto"
                >
                  Close
                </button>
                <a
                  href={`mailto:${emailData.email}`}
                  className="inline-flex w-full justify-center rounded-md bg-light-blue px-3 py-2 text-sm font-semibold text-dark-gray shadow-sm hover:text-light-gray hover:border hover:border-light-blue hover:bg-dark-gray sm:ml-3 sm:w-auto"
                >
                  Reply
                </a>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Admin;
