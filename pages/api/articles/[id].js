import { articles } from "../../../data";

export default function handler(req, res) {
  const { id } = req.query;
  const article = articles.find(a => a.id === id);
  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: `Article not found with id ${id}.` });
  }
}