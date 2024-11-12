export const handleNotifyComingSoon = (values: string, toast: any) => {
    
   toast.info(`${values}`, {
     action: {
       label: "Close",
       onClick: () => console.log("Undo"),
     },
   });
};
