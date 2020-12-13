import React from 'react';
import { createMemoryHistory } from 'history';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

import App from '../App';

jest.mock('../services/apiService', () => {
  return {
    generationsFetcher: () => ({
      results: [
        {
          name: 'generation I',
          url: 'generation/1/'
        },
        {
          name: 'generation II',
          url: 'generation/2/'
        }
      ]
    }),
    generationFetcher: () => ({
      id: 1,
      name: 'generation I',
      main_region: 'jotho',
      pokemon_species: [{ name: 'pigeot', url: 'pokemon/pigeot' }]
    }),
    getPokemon: () => ({
      name: 'pigeot',
      stats: [],
      color: { name: 'white' },
      evolution: {}
    })
  };
});

describe('Test Pokemon Page', () => {
  let container: any = null;
  const history = createMemoryHistory();
  history.push('/generation/1/pokemon/pigeot');

  const originalError = console.error;
  beforeAll(() => {
    console.error = (...args: any) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  afterAll(() => {
    console.error = originalError;
  });

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('when initiated', () => {
    it('should appear the pokemon sidebar details', async () => {
      render(
        <Router history={history}>
          <App />
        </Router>,
        container
      );
      expect(await screen.findByText('Mapa de evolução')).toBeInTheDocument();
      expect(await screen.findByText('Atributos')).toBeInTheDocument();
    });
  });
});
