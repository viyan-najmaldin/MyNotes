import { useState ,useEffect } from 'react';
import { startOfWeek, endOfWeek , startOfMonth, endOfMonth, isWithinInterval, parseISO,} from 'date-fns';

const Datess = ({ notes, setFilterr ,setResultFilter }) => {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'week', 'month'

  const today = new Date();
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
  ];

  const getFilteredNotes = (notes, filterId) => {
    if (filterId === 'week') {
      const weekStart = startOfWeek(today, { weekStartsOn: 1 });
      const weekEnd = endOfWeek(today, { weekStartsOn: 1 });
      return notes.filter(note => {
        const noteDate =
          typeof note.datetime === 'string'
            ? parseISO(note.datetime)
            : note.datetime;
        return isWithinInterval(noteDate, { start: weekStart, end: weekEnd });
      });
    }

    if (filterId === 'month') {
      const monthStart = startOfMonth(today);
      const monthEnd = endOfMonth(today);
      return notes.filter(note => {
        const noteDate =
          typeof note.datetime === 'string'
            ? parseISO(note.datetime)
            : note.datetime;
        return isWithinInterval(noteDate, { start: monthStart, end: monthEnd });
      });
    }

    // 🟢 "all" → return everything
    return notes;
  };

  const handleFilterClick = filterId => {
    setActiveFilter(filterId);
    const filtered = getFilteredNotes(notes, filterId);
    setFilterr(filtered); // ✅ pass the filtered notes, not the function itself
  };

    useEffect(() => {
    setResultFilter([...getFilteredNotes(notes, activeFilter)].reverse() );
  }, [notes, activeFilter]);


  return (
    <div className="flex gap-2">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`my-4 sm:text-base text-xs rounded-2xl sm:px-6 px-4 py-1 transition ${
            activeFilter === filter.id
              ? 'bg-black text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default Datess;
