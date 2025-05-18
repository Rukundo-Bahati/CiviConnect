
export type ComplaintStatus = 'pending' | 'under-review' | 'in-progress' | 'resolved' | 'rejected';

export type Department = 'roads' | 'sanitation' | 'water' | 'electricity' | 'parks' | 'public-safety' | 'other';

export interface Complaint {
  id: string;
  title: string;
  description: string;
  category: Department;
  location: string;
  status: ComplaintStatus;
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  citizenId: string;
  response?: {
    text: string;
    respondentName: string;
    respondentTitle: string;
    timestamp: string;
  };
  attachments?: string[];
}

export const departments: Record<Department, string> = {
  'roads': 'Roads & Infrastructure',
  'sanitation': 'Sanitation & Waste',
  'water': 'Water & Sewage',
  'electricity': 'Electricity & Power',
  'parks': 'Parks & Recreation',
  'public-safety': 'Public Safety',
  'other': 'Other Services'
};

export const statusLabels: Record<ComplaintStatus, string> = {
  'pending': 'Pending Review',
  'under-review': 'Under Review',
  'in-progress': 'In Progress',
  'resolved': 'Resolved',
  'rejected': 'Rejected'
};

export const statusColors: Record<ComplaintStatus, string> = {
  'pending': 'bg-yellow-100 text-yellow-800',
  'under-review': 'bg-blue-100 text-blue-800',
  'in-progress': 'bg-purple-100 text-purple-800',
  'resolved': 'bg-green-100 text-green-800',
  'rejected': 'bg-red-100 text-red-800'
};

export const mockComplaints: Complaint[] = [
  {
    id: '1',
    title: 'Pothole on Main Street',
    description: 'Large pothole causing traffic and damage to vehicles near the intersection of Main and Oak streets.',
    category: 'roads',
    location: '123 Main St',
    status: 'in-progress',
    createdAt: '2023-05-10T10:30:00Z',
    updatedAt: '2023-05-12T14:20:00Z',
    assignedTo: 'Roads Department',
    citizenId: 'user1',
    response: {
      text: 'We have scheduled repairs for next week. Thank you for reporting this issue.',
      respondentName: 'John Smith',
      respondentTitle: 'Roads Department Coordinator',
      timestamp: '2023-05-12T14:20:00Z'
    }
  },
  {
    id: '2',
    title: 'Street Light Outage',
    description: 'Three consecutive street lights not working on Cedar Avenue, creating safety concerns at night.',
    category: 'electricity',
    location: 'Cedar Avenue between 5th and 6th St',
    status: 'pending',
    createdAt: '2023-05-14T16:45:00Z',
    updatedAt: '2023-05-14T16:45:00Z',
    citizenId: 'user1'
  },
  {
    id: '3',
    title: 'Overflowing Trash Bins',
    description: 'Public trash bins at Central Park haven\'t been emptied for over a week and are overflowing.',
    category: 'sanitation',
    location: 'Central Park, West Entrance',
    status: 'resolved',
    createdAt: '2023-05-01T09:15:00Z',
    updatedAt: '2023-05-03T11:30:00Z',
    assignedTo: 'Sanitation Department',
    citizenId: 'user2',
    response: {
      text: 'Trash bins have been emptied and we have increased the collection frequency for this location.',
      respondentName: 'Maria Johnson',
      respondentTitle: 'Sanitation Supervisor',
      timestamp: '2023-05-03T11:30:00Z'
    }
  },
  {
    id: '4',
    title: 'Water Leak on Elm Street',
    description: 'Water leaking from a pipe on the sidewalk, creating slippery conditions.',
    category: 'water',
    location: '456 Elm St',
    status: 'under-review',
    createdAt: '2023-05-13T13:20:00Z',
    updatedAt: '2023-05-13T15:45:00Z',
    assignedTo: 'Water Services',
    citizenId: 'user3'
  },
  {
    id: '5',
    title: 'Broken Playground Equipment',
    description: 'The slide at Riverside Park has a large crack and is unsafe for children.',
    category: 'parks',
    location: 'Riverside Park, Children\'s Area',
    status: 'rejected',
    createdAt: '2023-04-28T10:10:00Z',
    updatedAt: '2023-05-02T09:30:00Z',
    assignedTo: 'Parks Department',
    citizenId: 'user1',
    response: {
      text: 'Upon inspection, we found that this equipment is scheduled for replacement in our upcoming renovation next month. We have placed caution tape around it until then.',
      respondentName: 'David Wilson',
      respondentTitle: 'Parks Manager',
      timestamp: '2023-05-02T09:30:00Z'
    }
  }
];

// Admin Users
export const adminUsers = [
  {
    id: 'admin1',
    name: 'Admin User',
    department: 'System Administration',
    email: 'admin@example.gov',
    role: 'admin'
  }
];

// Analytical Data
export const analyticalData = {
  complaintsByCategory: [
    { name: 'Roads & Infrastructure', value: 35 },
    { name: 'Sanitation & Waste', value: 25 },
    { name: 'Water & Sewage', value: 15 },
    { name: 'Electricity & Power', value: 12 },
    { name: 'Parks & Recreation', value: 8 },
    { name: 'Public Safety', value: 5 },
    { name: 'Other Services', value: 3 }
  ],
  complaintsByStatus: [
    { name: 'Pending Review', value: 28 },
    { name: 'Under Review', value: 22 },
    { name: 'In Progress', value: 30 },
    { name: 'Resolved', value: 15 },
    { name: 'Rejected', value: 5 }
  ],
  responseTime: [
    { name: 'Less than 24 hours', value: 20 },
    { name: '1-3 days', value: 45 },
    { name: '3-7 days', value: 25 },
    { name: 'More than 7 days', value: 10 }
  ]
};
