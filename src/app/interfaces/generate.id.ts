export function generateId(): string {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';
    for (let char of uniqueValues) {
      let index = Math.floor(Math.random() * uniqueValues.length);
      id += uniqueValues[index];
    }
    return id;
  }