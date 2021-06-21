import React, { useEffect } from "react";

const MovieManagement = () => {
  useEffect(() => {
    document.title = "TIX - Quản lý phim";
  }, []);
  return <div>MovieManagement</div>;
};

export default MovieManagement;
