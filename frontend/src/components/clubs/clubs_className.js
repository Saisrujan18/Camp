const feed_styles={

}

const post_styles={
    post__body:"post__body flex flex-col bg-white border shadow-lg w-full max-w-post-feed min-w-post-feed h-auto rounded-lg self-center",
    post__header:"post__header flex flex-row w-full",
    post__avatar:"post__avatar w-avatar-dp-small h-avatar-dp-small md:w-avatar-dp md:h-avatar-dp",
    post__info:"post__info flex flex-col px-2 py-4",
    post__title:"post__title text-2xl font-camp",
    post__userInfo:"post__userInfo user_info flex flex-row w-auto",
    post__userName:"post__userName font-semibold italic text-black",
    post__verified:"post__verified text-darkBlu",
    post__userID:"post__userID italic text-gre",
    post__description:"post__description font-title_1 italic px-6 py-1",
    post__imageHolder:"post__imageHolder self-center px-2 py-2 w-98",
    post__image:"post__image w-full h-auto rounded-lg",
    post__w_h_full:"w_h_full w-full h-full",
    post__flex_grow:"post__flex_grow flex-grow bg-white",
}

const newpost_styles={
    newpost__screen:"newpost__screen flex flex-row h-screen",
    newpost__body:"newpost__body flex-grow bg-whit large:rounded-r-lg large:mr-2 medium:rounded-r-lg medium:mr-2 my-2 small:rounded-lg small:mx-2 flex flex-col w-screen-lg overflow-y-auto",
    newpost__header:"newpost__header flex flex-row bg-whit rounded-tr-lg border-b-2 top-0",
    newpost__title:"newpost__title m-2 ml-4 mb-4 text-3xl text-left font-medium flex flex-row gap-x-2",
    newpost__backButton:"newpost__backButton block p-2 my-1 mr-4 hover:text-darkBlu hover:bg-gray-200 font-bold rounded",
    newpost__inputFields:"newpost__inputFields flex flex-col h-auto px-4 py-2 w-2/3 rounded-lg justify-start self-center items-stretch bg-white space-y-8 overflow-y-scroll",
    newpost__selectFromFilesButton:"newpost__selectFromFilesButton h-auto w-48 cursor-pointer flex flex-row gap-x-2 block p-3 my-2 text-justify hover:text-darkBlu hover:bg-gray-200 font-bold rounded",
    selectFromFilesButton__svg:"selectFromFilesButton__svg h-svg-icon-small w-svg-icon-small self-center",

    newpost__imagePreview:"newpost__imagePreview flex flex-col p-4 shadow-lg bg-whit mb-3 rounded-lg w-auto h-auto",
    newpost__imageHolder:"newpost__imageHolder self-center px-2 h-auto",
    newpost__image:"newpost__image w-full h-auto rounded-lg",
    newpost__publishButton:"newpost__publishButton flex flex-row gap-x-2 block p-3 my-2 text-justify hover:text-darkBlu hover:bg-gray-200 font-bold rounded ml-auto",
    publishButton_svg:"publishButton_svg h-svg-icon-small w-svg-icon-small self-center",
    publishButton_spinner:"publishButton_spinner block p-3 my-2 text-justify hover:text-darkBlu hover:bg-gray-200 font-bold rounded ml-auto",
    newpost__flexgrow:"newpost__flexgrow flex-grow",

    newpost__addImageButton:"newpost__addImageButton flex flex-row gap-x-2 block p-2 m-1 self-center font-bold rounded ",
    addImageButton__hoverAddImg:"hover:text-darkBlu hover:bg-gray-200",
    addImageButton__hoverRemoveImg:"text-darkBlu bg-gray-200 hover:text-black hover:bg-darkOrang25",
    addImageButton__svg:"addImageButton__svg h-svg-icon-small w-svg-icon-small self-center"

}

export {feed_styles, post_styles, newpost_styles}