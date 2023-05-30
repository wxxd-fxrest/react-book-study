import axios from "axios";
import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";
import NewsPage from "./NewsPage";

const NewApp = () => {
    return(
        <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/:category" element={<NewsPage />} />
        </Routes>
    )
}

export default NewApp ; 

