export default function template() {
  return Promise.resolve(templateSync());
}

export function templateSync() {
  return "Template";
}
