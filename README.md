# Mitochron Frontend Assessment

### Installation Process

```
    Clone the project - git clone ...
    cd into project
    run npm install || yarn install
    run npm run dev || yarn dev

```

### To easily view on mobile (Optional)

```
    run npm run dev --host

```

### Project configuration/Setup

```
    Linting setup with eslint-config, prettier
    State management: Context API
    Styling: Tailwind CSS, Shadcn 
    Icons: Luicide because of its light weight
    Routing: React Router
    ReactJs
    Tailwind
    Typescript for typesafety
    Vite (Module Bundler)
```

### Project Link:

https://mitochr-n.vercel.app/dashboard


##### 1. Brief Overview of Your Approach

In developing the dashboard, I used React with TypeScript to ensure type safety and clarity. The sidebar layout was created with Tailwind CSS and shadcn for easy styling and responsiveness. To handle navigation, I used React Router to manage internal links and conditionally applied styles based on the current route to improve user experience. Additionally, I added transitions to make interactions smooth and visually appealing.

##### 2. Additional Comments or Explanations About Specific Design Decisions

-  Conditional Styling with Template Literals:
Instead of using multiple CSS classes or creating custom styles for each navigation item’s active state, I chose to implement conditional styling directly in the component using template literals with Tailwind CSS classes. By checking the current route with location.pathname and using inline logic within the className attribute, this approach allows for dynamic styling based on the current path without additional re-renders. This reduces the need for extra CSS files, minimizes component complexity, and improves maintainability.

```javascript

    className={`flex items-center justify-start rounded-lg px-4 py-3 ${
      location.pathname === "/dashboard" ? "bg-white text-black" : "hover:bg-white hover:text-black"
    }`}

```
This approach takes advantage of React’s declarative model, which keeps components lightweight and reduces overhead in managing multiple conditional classes.

- Positioning with absolute and relative:
To keep the bottom section fixed within the parent sidebar, I applied position: absolute with bottom-0 to the fixed while making the parent container relative. This ensures that the fixed section stays at the bottom regardless of screen height or scroll position within the sidebar. This approach was chosen over flex or grid because absolute positioning within a relatively positioned parent is more reliable for sticky elements in dynamic layouts.

```css
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-200">
        <CustomButton
            className="flex w-full items-center space-x-2 justify-center rounded-xl border border-[#C0C9C0] py-4 font-medium"
            icon={
            <img
                src="/images/dashboard/icons/captive.svg"
                alt="Linkedin Picture"
                className="h-6 w-6"
            />
            }
            text="Linkedin"
            type={"button"}
        />
    </div>
```


Lastly Using Tailwind’s utility classes made it easy to handle these adjustments and the inclusion of prettier-plugin-tailwindcss helps to keep the Tailwind class order consistent and improves code readability."





