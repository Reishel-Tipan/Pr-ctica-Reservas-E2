import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODE0NmU3MmUyZWVhNWU0ZTE0NzZhNyIsImlhdCI6MTc3MDEwMzUzNSwiZXhwIjoxNzcwMTA3MTM1fQ.Vh0UmcBbiDeUmvv0V7qpCxc4JjoZRp_kLModxrvdvHE';

export default function () {
  const url = 'http://localhost:3000/api/reservas';

  const payload = JSON.stringify({
    fecha: '2026-02-10',
    hora: '10:00',
    sala: 'Sala A',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status OK': (r) => r.status === 200 || r.status === 201,
  });

  sleep(1);
}
