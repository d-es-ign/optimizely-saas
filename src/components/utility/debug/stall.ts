/* 
  Use this to simulate some heavy logic like loading a large asset or formatting data f.e. When building components using skeleton loading in storybook.
  Accepts a duration in milliseconds.
*/

export async function stall(stallTime = 3000) {
  await new Promise((resolve) => setTimeout(resolve, stallTime));
}
