import { useState, useEffect } from 'react';
import axios from 'axios';

// URL APi
const API_URL = 'https://wedding-comments-pho6h3diz-keyra-cos-projects.vercel.app/api/comments';

const useComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch comments from server
  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setComments(response.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Function to add a new comment
  const addComment = async (commentData) => {
    try {
      const response = await axios.post(API_URL, commentData);
      console.log('Comment added:', response.data);
      console.log('Response from server:', response.data);

      // Ambil komentar terbaru setelah komentar ditambahkan

      setComments((prevComments) => {
        const newComments = [response.data, ...prevComments];
        console.log('New comments:', newComments);
        return newComments;
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      setError('Gagal menambahkan komentar');
    }
  };

  return { comments, loading, error, addComment };
};

export default useComments;
