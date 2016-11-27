export const add_action=(title, tags, content, publishTime, excerpt)=>({
  type: 'ADD',
  title: title,
  tags: tags,
  content: content,
  publishTime: publishTime,
  excerpt: excerpt
});

export const delete_action=(id)=>({
  type: 'DELETE',
  id: id
});

export const update_action=(title, tags, content, excerpt, id)=>({
  type: 'UPDATE',
  title: title,
  tags: tags,
  content: content,
  excerpt: excerpt,
  id: id
});

export const read_action=(id)=>({
  type: 'READ',
  id: id
});
