import { useEffect, useState, useReducer } from "react";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

const initialState = {
  isPending: false,
  error: null,
  success: false,
  data: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "IS_PENDING":
      return {
        ...state,
        isPending: true,
        error: null,
        success: false,
        data: null,
      };
    case "ERROR":
      return { ...state, isPending: false, error: payload, success: false };
    case "ADD_SUCCESS":
    case "UPDATE_SUCCESS":
    case "DELETE_SUCCESS":
      return {
        ...state,
        isPending: false,
        error: null,
        success: true,
        data: payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collectionName) => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const colRef = collection(db, collectionName);

  const addDocument = async (docData) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const docRef = await addDoc(colRef, docData);
      const newDoc = { id: docRef.id, ...docData };

      if (!isCanceled) {
        dispatch({ type: "ADD_SUCCESS", payload: newDoc });
      }

      return newDoc;
    } catch (err) {
      if (!isCanceled) {
        dispatch({ type: "ERROR", payload: err.message });
      }
      throw err;
    }
  };

  const updateDocument = async (id, updates) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, updates);
      const updatedDoc = { id, ...updates };

      if (!isCanceled) {
        dispatch({ type: "UPDATE_SUCCESS", payload: updatedDoc });
      }

      return updatedDoc;
    } catch (err) {
      if (!isCanceled) {
        dispatch({ type: "ERROR", payload: err.message });
      }
      throw err;
    }
  };

  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);

      if (!isCanceled) {
        dispatch({ type: "DELETE_SUCCESS", payload: id });
      }

      return id;
    } catch (err) {
      if (!isCanceled) {
        dispatch({ type: "ERROR", payload: err.message });
      }
      throw err;
    }
  };

  useEffect(() => {
    return () => setIsCanceled(true);
  }, []);

  return {
    ...state,
    addDocument,
    updateDocument,
    deleteDocument,
  };
};
