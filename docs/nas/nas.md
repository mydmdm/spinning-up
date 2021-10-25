# Part 1: Key Concepts in NAS

## Why we do NAS

## Key Concepts and Terminology

The objective of NAS is to find an network architecture $a$ from a predefined search space $\mathcal{A}$ that maximizes the predictive performance on unseen data $\phi(a)$. 

$$
a^\star = \mathop{\arg\max}_{a\in \mathcal{A}} \, \,  \phi(a)
$$

For a network architecture $a$ and its weights $w$, let's denote its training loss by $\mathcal{L}_{train}(a,w)$ and its predictive performance (e.g., classification accuracy) on validation dataset by $\mathcal{P}_{val}(a,w)$. Then $\phi(a)$ is usually defined by 

$$
\phi(a) = \mathcal{P}_{val} (a, W_a^\star) 
$$

where $W_a^\star$ is the weights learned to minimize the training loss 

$$
W_a^\star = \mathop{\arg\min}_W \, \, \mathcal{L}_{train}(a, W)
$$

```mermaid
flowchart LR
space[Search Space A] --> controller[Search Strategy]
controller -->|sample a from A| eval[Evaluation Strategy]
eval -->|return score of a| controller
```

Above equations introduce some key concepts of a NAS algorithm, they are

- **Search Space**. The search space $\mathcal{A}$ defines the set of all the possible architectures.

- **Evaluation Strategy**. The evaluation function $\phi(a)$ is used to score an architecture candidate and return the scalar back to controller (search strategy). 

- **Search Strategy**. 

### Evaluation Strategy
The ideal evaluation function is directly scoring each architecture candidate $a$ with $\phi(a)$, which requires a standard training from sketch and evaluation of the whole training and validation dataset respectively. The computation cost of $\phi(a)$ is unfortunately huge and it is not suitable in the scenario of NAS, where thousands of architectures needs to be evaluated. 

