export function h1({ children, ...props }: any) {
  return (
    <h1 {...props} class="mt-5 first:mt-2 font-bold text-3xl md:text-4xl">
      {children}
    </h1>
  );
}

export function h2({ children, ...props }: any) {
  return (
    <h2 {...props} class="mt-5 first:mt-2 mb-2 font-bold text-xl md:text-2xl">
      {children}
    </h2>
  );
}

export function h3({ children, ...props }: any) {
  return (
    <h3 {...props} class="mt-5 first:mt-2 mb-2 font-bold md:text-xl">
      {children}
    </h3>
  );
}

export function h4({ children, ...props }: any) {
  return (
    <h4 {...props} class="mt-5 first:mt-2 mb-2 font-bold">
      {children}
    </h4>
  );
}

export function p({ children, ...props }: any) {
  return (
    <p {...props} class="my-2">
      {children}
    </p>
  );
}

export function a({ children, ...props }: any) {
  return (
    <a
      {...props}
      class="text-orange-5 hover:text-orange-7 hover:underline cursor-pointer"
    >
      {children}
    </a>
  );
}

export function blockquote({ children, ...props }: any) {
  return (
    <blockquote {...props} class="my-2 pl-4 border-l-4">
      <div class="-my-1">{children}</div>
    </blockquote>
  );
}
